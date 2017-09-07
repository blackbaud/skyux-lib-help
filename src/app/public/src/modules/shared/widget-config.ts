export interface HelpWidgetConfig {
  extends?: string;
  productId?: string;
  defaultHelpKey?: string;
  locale?: string;
  helpBaseUrl?: string;
  getChatData?: any;
  customLocales?: any[];
  headerColor?: string;
  headerTextColor?: string;
  trainingCentralUrl?: string;
  knowledgeBaseUrl?: string;
  caseCentralUrl?: string;
  helpCentralUrl?: string;
  hideUndock?: any;
  hideWidgetOnMobile?: any;
  hideHelpChat?: any;
  useFlareSearch?: any;
}
