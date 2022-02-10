#' @title Test_Cases_for_AE_Assessment
#' @editor Nathan Kosiba
#' @editDate 2022-02-08
#' @coverage
#' 1.1: 1.1, 1.3
#' 1.2: 1.2, 1.3
#' 1.3: 1.4
#' 1.4: 1.4
#' 1.5: 1.5
#' 1.6: 1.6
#' 1.7: 1.6


+ Setup: DOCUMENT ANY SETUP THAT NEEDS TO BE DONE FOR TESTING

+ 1.1 Test that the AE assessment can return a correctly assessed data frame
for the poisson test grouped by the study variable when given correct input data
+ 1.2 Test that the AE assessment can return a correctly assessed data frame
for the wilcoxon test grouped by the study variable when given correct input data
+ 1.3 Test that sites are flagged with -1 when AE rate is lower than expected 
+ 1.4 Test that sites are flagged with +1 when AE rate is higher than expected
+ 1.5 Test that Assessment can return all data in the standard data pipeline
(`dfInput`, `dfTransformed`, `dfAnalyzed`, `dfFlagged`, and `dfSummary`)
+ 1.6 Test that (NA, NaN) in input exposure data throws a warning and 
drops the person from the analysis.
+ 1.7 Test that (NA, NaN) in input count data throws a warning and 
drops the person from the analysis.