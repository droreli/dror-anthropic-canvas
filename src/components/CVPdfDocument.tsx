import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
  Link,
} from "@react-pdf/renderer";
import { candidateData } from "@/lib/cvData";

// Use Helvetica (built-in) for reliability - no external font loading needed
// react-pdf has built-in support for: Courier, Helvetica, Times-Roman

// Accent color - warm professional tone
const ACCENT_COLOR = "#8B7355"; // Warm brown matching Anthropic style
const TEXT_COLOR = "#1a1a1a";
const MUTED_COLOR = "#666666";

const styles = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 9,
    paddingTop: 30,
    paddingBottom: 40,
    paddingHorizontal: 35,
    color: TEXT_COLOR,
    lineHeight: 1.4,
  },
  // Header
  header: {
    marginBottom: 16,
    borderBottomWidth: 2,
    borderBottomColor: ACCENT_COLOR,
    paddingBottom: 12,
  },
  name: {
    fontSize: 22,
    fontWeight: 700,
    marginBottom: 2,
    color: TEXT_COLOR,
  },
  title: {
    fontSize: 11,
    fontWeight: 600,
    color: ACCENT_COLOR,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 12,
    fontSize: 8,
    color: MUTED_COLOR,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
  },
  link: {
    color: MUTED_COLOR,
    textDecoration: "none",
  },
  // Section
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: TEXT_COLOR,
    marginBottom: 8,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: "#e5e5e5",
    textTransform: "uppercase",
    letterSpacing: 0.5,
  },
  // Summary
  summary: {
    fontSize: 9,
    lineHeight: 1.5,
    color: TEXT_COLOR,
    marginBottom: 4,
  },
  // Impact Highlights
  highlightItem: {
    flexDirection: "row",
    marginBottom: 5,
    paddingLeft: 8,
  },
  bullet: {
    width: 12,
    fontSize: 9,
    color: ACCENT_COLOR,
  },
  highlightText: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.45,
  },
  // Core Strengths
  strengthItem: {
    flexDirection: "row",
    marginBottom: 4,
    paddingLeft: 8,
  },
  strengthText: {
    flex: 1,
    fontSize: 8.5,
    lineHeight: 1.4,
  },
  // Experience
  experienceItem: {
    marginBottom: 10,
  },
  companyRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 1,
  },
  company: {
    fontSize: 10,
    fontWeight: 700,
    color: TEXT_COLOR,
  },
  period: {
    fontSize: 8,
    color: MUTED_COLOR,
    textAlign: "right",
  },
  roleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },
  role: {
    fontSize: 9,
    fontWeight: 500,
    color: ACCENT_COLOR,
  },
  location: {
    fontSize: 8,
    color: MUTED_COLOR,
  },
  achievementItem: {
    flexDirection: "row",
    marginBottom: 2.5,
    paddingLeft: 8,
  },
  achievementBullet: {
    width: 10,
    fontSize: 8,
    color: ACCENT_COLOR,
  },
  achievementText: {
    flex: 1,
    fontSize: 8,
    lineHeight: 1.4,
  },
  // Education
  educationItem: {
    marginBottom: 6,
  },
  degree: {
    fontSize: 9,
    fontWeight: 600,
    color: TEXT_COLOR,
  },
  school: {
    fontSize: 8,
    color: MUTED_COLOR,
  },
  eduDetails: {
    fontSize: 7.5,
    color: MUTED_COLOR,
    marginTop: 1,
  },
  // Two column layout
  twoColumn: {
    flexDirection: "row",
    gap: 20,
  },
  leftColumn: {
    flex: 1,
  },
  rightColumn: {
    width: 140,
  },
  // Languages & Military
  listItem: {
    fontSize: 8,
    marginBottom: 2,
    color: TEXT_COLOR,
  },
  // Page number
  pageNumber: {
    position: "absolute",
    fontSize: 7,
    bottom: 20,
    right: 35,
    color: MUTED_COLOR,
  },
});

// Helper to render bullet points
const BulletPoint = ({ children, style }: { children: React.ReactNode; style?: object }) => (
  <View style={[styles.highlightItem, style]}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.highlightText}>{children}</Text>
  </View>
);

const CVPdfDocument = () => {
  const data = candidateData;
  
  // Split experience into main roles and earlier career
  const mainExperience = data.experience.slice(0, 4); // Nuvei, Simplex, Vayomar, MotorK
  const earlierCareer = data.experience.slice(4); // Rest
  
  return (
    <Document
      title={`${data.name} - CV`}
      author={data.name}
      subject="Professional CV"
      keywords={data.hiddenKeywords.join(", ")}
    >
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{data.name}</Text>
          <Text style={styles.title}>{data.title}</Text>
          <View style={styles.contactRow}>
            <View style={styles.contactItem}>
              <Link src={`mailto:${data.email}`} style={styles.link}>
                {data.email}
              </Link>
            </View>
            <Text>|</Text>
            <View style={styles.contactItem}>
              <Link src={`tel:${data.phone}`} style={styles.link}>
                {data.phone}
              </Link>
            </View>
            <Text>|</Text>
            <View style={styles.contactItem}>
              <Link src={`https://${data.linkedin}`} style={styles.link}>
                LinkedIn: {data.linkedin}
              </Link>
            </View>
            <Text>|</Text>
            <Text>{data.location}</Text>
          </View>
        </View>

        {/* Impact Highlights */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Impact Highlights</Text>
          {data.impactHighlights.map((highlight, i) => (
            <BulletPoint key={i}>{highlight}</BulletPoint>
          ))}
        </View>

        {/* Summary */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Summary</Text>
          <Text style={styles.summary}>{data.about}</Text>
        </View>

        {/* Core Strengths */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Core Strengths</Text>
          {data.coreStrengths.map((strength, i) => (
            <View key={i} style={styles.strengthItem}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.strengthText}>{strength}</Text>
            </View>
          ))}
        </View>

        {/* Experience */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Experience</Text>
          {mainExperience.map((exp, i) => (
            <View key={i} style={styles.experienceItem} wrap={false}>
              <View style={styles.companyRow}>
                <Text style={styles.company}>
                  {exp.company}
                  {exp.company === "Simplex (acquired by Nuvei)" ? "" : ` - ${exp.role}`}
                </Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              {exp.company === "Simplex (acquired by Nuvei)" && (
                <View style={styles.roleRow}>
                  <Text style={styles.role}>{exp.role}</Text>
                </View>
              )}
              <View style={styles.roleRow}>
                <Text style={styles.role}>{exp.company !== "Simplex (acquired by Nuvei)" ? "" : ""}</Text>
                <Text style={styles.location}>{exp.location}</Text>
              </View>
              {exp.achievements.map((achievement, j) => (
                <View key={j} style={styles.achievementItem}>
                  <Text style={styles.achievementBullet}>•</Text>
                  <Text style={styles.achievementText}>{achievement}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Page number */}
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>

      {/* Page 2 - Earlier Career + Education */}
      <Page size="A4" style={styles.page}>
        {/* Earlier Career */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Earlier Career</Text>
          {earlierCareer.map((exp, i) => (
            <View key={i} style={styles.experienceItem} wrap={false}>
              <View style={styles.companyRow}>
                <Text style={styles.company}>{exp.company} - {exp.role}</Text>
                <Text style={styles.period}>{exp.period}</Text>
              </View>
              <View style={styles.roleRow}>
                <Text style={styles.role}>{exp.description}</Text>
                <Text style={styles.location}>{exp.location}</Text>
              </View>
              {exp.achievements.map((achievement, j) => (
                <View key={j} style={styles.achievementItem}>
                  <Text style={styles.achievementBullet}>•</Text>
                  <Text style={styles.achievementText}>{achievement}</Text>
                </View>
              ))}
            </View>
          ))}
        </View>

        {/* Two column layout for Education, Languages, Military */}
        <View style={styles.twoColumn}>
          <View style={styles.leftColumn}>
            {/* Education */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Education</Text>
              {data.education.map((edu, i) => (
                <View key={i} style={styles.educationItem}>
                  <Text style={styles.degree}>{edu.degree}</Text>
                  <Text style={styles.school}>{edu.school} | {edu.period}</Text>
                  <Text style={styles.eduDetails}>{edu.details}</Text>
                </View>
              ))}
            </View>
          </View>

          <View style={styles.rightColumn}>
            {/* Languages */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Languages</Text>
              {data.languages.map((lang, i) => (
                <Text key={i} style={styles.listItem}>• {lang}</Text>
              ))}
            </View>

            {/* Military */}
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Military Service</Text>
              <Text style={styles.listItem}>{data.military}</Text>
            </View>
          </View>
        </View>

        {/* Page number */}
        <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => `${pageNumber} / ${totalPages}`} fixed />
      </Page>
    </Document>
  );
};

export default CVPdfDocument;
