# incorrect inputs throw errors

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = list(), dfSUBJ = list()), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      x df is not a data.frame()
      x the following columns not found in df: SubjectID, CONSENT_TYPE, CONSENT_VALUE, CONSENT_DATE
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfCONSENT domain
      x df is not a data.frame()
      x the following columns not found in df: SubjectID, SiteID, RandDate
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT, dfSUBJ = list()), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      v No issues found for dfCONSENT domain
      x df is not a data.frame()
      x the following columns not found in df: SubjectID, SiteID, RandDate
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = list(), dfSUBJ = dfSUBJ), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      x df is not a data.frame()
      x the following columns not found in df: SubjectID, CONSENT_TYPE, CONSENT_VALUE, CONSENT_DATE
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfCONSENT domain
      v No issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = "Hi", dfSUBJ = "Mom"), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      x df is not a data.frame()
      x the following columns not found in df: SubjectID, CONSENT_TYPE, CONSENT_VALUE, CONSENT_DATE
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfCONSENT domain
      x df is not a data.frame()
      x the following columns not found in df: SubjectID, SiteID, RandDate
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT, dfSUBJ = dfSUBJ, mapping = list()),
      bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      v No issues found for dfCONSENT domain
      v No issues found for dfSUBJ domain
      x df is not a data.frame()
      x spec is not a list()
      x mapping is not a list()
      x Non-character column names found in mapping: 
      ! Issues found for mapping domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT %>% select(-CONSENT_DATE),
      dfSUBJ = dfSUBJ), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      x the following columns not found in df: CONSENT_DATE
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfCONSENT domain
      v No issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT %>% select(-CONSENT_TYPE),
      dfSUBJ = dfSUBJ), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      x the following columns not found in df: CONSENT_TYPE
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfCONSENT domain
      v No issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT %>% select(-CONSENT_VALUE),
      dfSUBJ = dfSUBJ), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      x the following columns not found in df: CONSENT_VALUE
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfCONSENT domain
      v No issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT, dfSUBJ = dfSUBJ %>% select(
        -SubjectID)), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      v No issues found for dfCONSENT domain
      x the following columns not found in df: SubjectID
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT, dfSUBJ = dfSUBJ %>% select(
        -SiteID)), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      v No issues found for dfCONSENT domain
      x the following columns not found in df: SiteID
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT, dfSUBJ = dfSUBJ %>% select(
        -RandDate)), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      v No issues found for dfCONSENT domain
      x the following columns not found in df: RandDate
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT, dfSUBJ = bind_rows(dfSUBJ,
        head(dfSUBJ, 1))), bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      v No issues found for dfCONSENT domain
      x Unexpected duplicates found in column: SubjectID
      ! Issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

# incorrect mappings throw errors

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT, dfSUBJ = dfSUBJ), lMapping = list(
        dfCONSENT = list(strIDCol = "not an id", strTypeCol = "CONSENT_TYPE",
          strValueCol = "CONSENT_VALUE", strDateCol = "CONSENT_DATE"), dfSUBJ = list(
          strIDCol = "SubjectID", strSiteCol = "SiteID", strRandDateCol = "RandDate")),
      bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      x the following columns not found in df: not an id
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfCONSENT domain
      v No issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL

---

    Code
      Consent_Map_Raw(dfs = list(dfCONSENT = dfCONSENT, dfSUBJ = dfSUBJ), lMapping = list(
        dfCONSENT = list(strIDCol = "SubjectID", strTypeCol = "CONSENT_TYPE",
          strValueCol = "CONSENT_VALUE", strDateCol = "CONSENT_DATE"), dfSUBJ = list(
          strIDCol = "not an id", strSiteCol = "SiteID", strRandDateCol = "RandDate")),
      bQuiet = F)
    Message <cliMessage>
      
      -- Checking Input Data for `Consent_Map_Raw()` --
      
      v No issues found for dfCONSENT domain
      x the following columns not found in df: not an id
      x NA check not run
      x Empty Value check not run
      x Unique Column Check not run
      ! Issues found for dfSUBJ domain
      ! Issues found for `Consent_Map_Raw()`
      ! `Consent_Map_Raw()` not run because of failed check.
    Output
      NULL
