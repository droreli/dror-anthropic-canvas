import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Link,
} from "@react-pdf/renderer";
import { candidateData } from "@/lib/cvData";

// Colors matching the ideal CV screenshot
const ACCENT_COLOR = "#8B7355"; // Warm brown for subtitles/roles
const TEXT_COLOR = "#1a1a1a";
const MUTED_COLOR = "#666666";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 45,
    color: TEXT_COLOR,
    lineHeight: 1.3,
  },
  
  // Header
  header: {
    marginBottom: 12,
  },
  name: {
    fontSize: 26,
    fontFamily: "Helvetica-Bold",
    color: TEXT_COLOR,
    marginBottom: 1,
  },
  title: {
    fontSize: 10,
    color: ACCENT_COLOR,
    marginBottom: 5,
  },
  contactRow: {
    flexDirection: "row",
    fontSize: 8,
    color: MUTED_COLOR,
  },
  contactSeparator: {
    marginHorizontal: 8,
  },
  link: {
    color: MUTED_COLOR,
    textDecoration: "none",
  },
  
  // Sections
  section: {
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: TEXT_COLOR,
    marginBottom: 5,
    paddingBottom: 2,
    borderBottomWidth: 0.5,
    borderBottomColor: "#999999",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  
  // Bullet items
  bulletItem: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bullet: {
    width: 8,
    fontSize: 8,
    color: TEXT_COLOR,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.35,
    color: TEXT_COLOR,
  },
  
  // Summary
  summaryText: {
    fontSize: 8,
    lineHeight: 1.4,
    color: TEXT_COLOR,
    textAlign: "justify",
  },
  
  // Experience
  experienceItem: {
    marginBottom: 8,
  },
  expHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  companyRole: {
    fontSize: 9.5,
    fontFamily: "Helvetica-Bold",
    color: TEXT_COLOR,
    flex: 1,
  },
  period: {
    fontSize: 8,
    color: TEXT_COLOR,
    textAlign: "right",
  },
  roleDesc: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 8,
    color: ACCENT_COLOR,
  },
  location: {
    fontSize: 8,
    color: TEXT_COLOR,
    textAlign: "right",
  },
  achievementItem: {
    flexDirection: "row",
    marginBottom: 1.5,
  },
  achievementBullet: {
    width: 8,
    fontSize: 7,
    color: TEXT_COLOR,
  },
  achievementText: {
    flex: 1,
    fontSize: 7.5,
    lineHeight: 1.3,
    color: TEXT_COLOR,
  },
  
  // Earlier Career divider
  earlierCareerSection: {
    marginTop: 4,
    paddingTop: 6,
    borderTopWidth: 0.5,
    borderTopColor: "#999999",
  },
  
  // Two column layout
  twoColumn: {
    flexDirection: "row",
    marginTop: 8,
  },
  leftCol: {
    flex: 1,
    paddingRight: 25,
  },
  rightCol: {
    width: 140,
  },
  
  // Education
  eduItem: {
    marginBottom: 6,
  },
  eduDegree: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: TEXT_COLOR,
  },
  eduSchool: {
    fontSize: 7.5,
    color: MUTED_COLOR,
  },
  eduDetails: {
    fontSize: 7,
    color: MUTED_COLOR,
    marginTop: 1,
  },
  
  // Languages & Military
  langItem: {
    fontSize: 8,
    marginBottom: 2,
    color: TEXT_COLOR,
  },
  
  // Page number
  pageNumber: {
    position: "absolute",
    fontSize: 7,
    bottom: 20,
    right: 45,
    color: MUTED_COLOR,
  },
});

const CVPdfDocument = () => {
  const data = candidateData;
  
  // Split experience: Main roles vs Earlier Career
  // Main: Nuvei, Simplex, Vayomar, MotorK (recent professional roles)
  // Earlier: Appslix, WoOdie, Hisense, DAO4Peace (startups/earlier)
  const mainExperience = data.experience.slice(0, 4);
  const earlierCareer = data.experience.slice(4);
  
  return (
    <Document
      title={`${data.name} - CV`}
      author={data.name}
      subject="Professional CV"
      keywords={data.hiddenKeywords.join(", ")}
    >
      {/* Single page that flows naturally - react-pdf handles page breaks */}
      <Page size="A4" style={styles.page} wrap>
        {/* Header */}
        <View style={styles.header} fixed>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.contactRow}>
            <Link src={`mailto:${data.email}`} style={styles.link}>{data.email}</Link>
            <Text style={styles.contactSeparator}>|</Text>
            <Link src={`tel:${data.phone}`} style={styles.link}>{data.phone}</Link>
            <Text style={styles.contactSeparator}>|</Text>
            <Text>LinkedIn: {data.linkedin}</Text>
            <Text style={styles.contactSeparator}>|</Text>
            <Text>{data.location}</Text>
          </View>
        </View>

        {/* Impact Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Impact Highlights</Text>
          {data.impactHighlights.map((item, i) => (
            <View key={i} style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summaryText}>{data.about}</Text>
        </View>

        {/* Core Strengths */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Strengths</Text>
          {data.coreStrengths.map((item, i) => (
            <View key={i} style={styles.bulletItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{item}</Text>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          
          {mainExperience.map((exp, i) => (
            <View key={i} style={styles.experienceItem} wrap={false}>
              <View style={styles.expHeader}>
                <Text style={styles.companyRole}>{exp.company} - {exp.role}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <View style={styles.roleDesc}>
                <Text style={styles.subtitle}>{exp.description}</Text>
                <Text style={styles.location}>{exp.location}</Text>
              </View>
              {exp.achievements.map((ach, j) => (
                <View key={j} style={styles.achievementItem}>
                  <Text style={styles.achievementBullet}>•</Text>
                  <Text style={styles.achievementText}>{ach}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Earlier Career */}
        <View style={[styles.section, styles.earlierCareerSection]}>
          <Text style={styles.sectionTitle}>Earlier Career</Text>
          
          {earlierCareer.map((exp, i) => (
            <View key={i} style={styles.experienceItem} wrap={false}>
              <View style={styles.expHeader}>
                <Text style={styles.companyRole}>{exp.company} - {exp.role}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <View style={styles.roleDesc}>
                <Text style={styles.subtitle}>{exp.description}</Text>
                <Text style={styles.location}>{exp.location}</Text>
              </View>
              {exp.achievements.map((ach, j) => (
                <View key={j} style={styles.achievementItem}>
                  <Text style={styles.achievementBullet}>•</Text>
                  <Text style={styles.achievementText}>{ach}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Education, Languages, Military - Two Column */}
        <View style={styles.twoColumn}>
          <View style={styles.leftCol}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {data.education.map((edu, i) => (
                <View key={i} style={styles.eduItem}>
                  <Text style={styles.eduDegree}>{edu.degree}</Text>
                  <Text style={styles.eduSchool}>{edu.school} | {edu.period}</Text>
                  <Text style={styles.eduDetails}>{edu.details}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <View style={styles.rightCol}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Languages</Text>
              {data.languages.map((lang, i) => (
                <Text key={i} style={styles.langItem}>• {lang}</Text>
              ))}
            </View>
            
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Military Service</Text>
              <Text style={styles.langItem}>{data.military}</Text>
            </View>
          </View>
        </View>

        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Document>
  );
};

export default CVPdfDocument;
