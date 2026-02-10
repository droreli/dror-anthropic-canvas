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
    paddingTop: 28,
    paddingBottom: 35,
    paddingHorizontal: 40,
    color: TEXT_COLOR,
    lineHeight: 1.35,
  },
  
  // Header - matching screenshot style
  header: {
    marginBottom: 14,
  },
  nameRow: {
    flexDirection: "row",
    alignItems: "baseline",
    marginBottom: 3,
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: TEXT_COLOR,
  },
  titleInline: {
    fontSize: 10,
    color: ACCENT_COLOR,
    marginBottom: 4,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    fontSize: 8,
    color: MUTED_COLOR,
    gap: 4,
  },
  contactSeparator: {
    marginHorizontal: 6,
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
    fontSize: 11,
    fontFamily: "Helvetica-Bold",
    color: TEXT_COLOR,
    marginBottom: 6,
    paddingBottom: 2,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    textTransform: "uppercase",
    letterSpacing: 0.3,
  },
  
  // Bullets for Impact Highlights & Core Strengths
  bulletItem: {
    flexDirection: "row",
    marginBottom: 4,
  },
  bullet: {
    width: 10,
    fontSize: 8,
    color: TEXT_COLOR,
  },
  bulletText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.4,
    color: TEXT_COLOR,
  },
  
  // Summary paragraph
  summaryText: {
    fontSize: 8.5,
    lineHeight: 1.5,
    color: TEXT_COLOR,
    textAlign: "justify",
  },
  
  // Experience items
  experienceItem: {
    marginBottom: 8,
  },
  expHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  companyRole: {
    fontSize: 10,
    fontFamily: "Helvetica-Bold",
    color: TEXT_COLOR,
    flex: 1,
  },
  periodRight: {
    fontSize: 8,
    color: TEXT_COLOR,
    textAlign: "right",
    minWidth: 90,
  },
  roleSubtitle: {
    fontSize: 9,
    color: ACCENT_COLOR,
    marginBottom: 3,
  },
  locationRight: {
    fontSize: 8,
    color: TEXT_COLOR,
    textAlign: "right",
    marginTop: -12,
  },
  
  // Achievement bullets (smaller)
  achievementItem: {
    flexDirection: "row",
    marginBottom: 2,
    paddingLeft: 4,
  },
  achievementBullet: {
    width: 8,
    fontSize: 7,
    color: TEXT_COLOR,
  },
  achievementText: {
    flex: 1,
    fontSize: 7.5,
    lineHeight: 1.35,
    color: TEXT_COLOR,
  },
  
  // Earlier Career section header divider
  sectionDivider: {
    borderTopWidth: 1,
    borderTopColor: "#cccccc",
    paddingTop: 8,
    marginTop: 4,
  },
  
  // Two column for Education/Languages
  twoColumn: {
    flexDirection: "row",
    marginTop: 6,
  },
  leftCol: {
    flex: 1,
    paddingRight: 20,
  },
  rightCol: {
    width: 150,
  },
  
  // Education
  eduItem: {
    marginBottom: 8,
  },
  eduDegree: {
    fontSize: 9,
    fontFamily: "Helvetica-Bold",
    color: TEXT_COLOR,
  },
  eduSchool: {
    fontSize: 8,
    color: MUTED_COLOR,
  },
  eduDetails: {
    fontSize: 7.5,
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
    bottom: 18,
    right: 40,
    color: MUTED_COLOR,
  },
});

const CVPdfDocument = () => {
  const data = candidateData;
  
  // Main experience: Nuvei, Simplex
  // Earlier career: Everything else
  const mainExperience = data.experience.slice(0, 2); // Nuvei, Simplex
  const earlierCareer = data.experience.slice(2); // Vayomar, MotorK, Appslix, WoOdie, Hisense, DAO4Peace
  
  return (
    <Document
      title={`${data.name} - CV`}
      author={data.name}
      subject="Professional CV"
      keywords={data.hiddenKeywords.join(", ")}
    >
      <Page size="A4" style={styles.page}>
        {/* Header - Name + Title inline */}
        <View style={styles.header}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{data.name}</Text>
          </View>
          <Text style={styles.titleInline}>{data.title}</Text>
          <View style={[styles.contactRow, { marginTop: 4 }]}>
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
              {/* Company - Role + Period */}
              <View style={styles.expHeaderRow}>
                <Text style={styles.companyRole}>
                  {exp.company} - {exp.role}
                </Text>
                <Text style={styles.periodRight}>{exp.period}</Text>
              </View>
              {/* Subtitle/Description + Location */}
              <View style={styles.expHeaderRow}>
                <Text style={styles.roleSubtitle}>{exp.description}</Text>
                <Text style={styles.locationRight}>{exp.location}</Text>
              </View>
              {/* Achievements */}
              {exp.achievements.map((ach, j) => (
                <View key={j} style={styles.achievementItem}>
                  <Text style={styles.achievementBullet}>•</Text>
                  <Text style={styles.achievementText}>{ach}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>

      {/* Page 2 - Earlier Career + Education */}
      <Page size="A4" style={styles.page}>
        
        {/* Earlier Career */}
        <View style={[styles.section, styles.sectionDivider]}>
          <Text style={styles.sectionTitle}>Earlier Career</Text>
          
          {earlierCareer.map((exp, i) => (
            <View key={i} style={styles.experienceItem} wrap={false}>
              <View style={styles.expHeaderRow}>
                <Text style={styles.companyRole}>
                  {exp.company} - {exp.role}
                </Text>
                <Text style={styles.periodRight}>{exp.period}</Text>
              </View>
              <View style={styles.expHeaderRow}>
                <Text style={styles.roleSubtitle}>{exp.description}</Text>
                <Text style={styles.locationRight}>{exp.location}</Text>
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

        {/* Two Column: Education | Languages + Military */}
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
