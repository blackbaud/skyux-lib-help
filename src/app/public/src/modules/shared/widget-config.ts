export interface HelpWidgetConfig {
  caseCentralUrl?: string;
  communityUrl?: string;
  customLocales?: string[];
  defaultHelpKey?: string;
  extends?: string;
  getChatData?: any;
  getCurrentHelpKey?: any;
  headerColor?: string;
  headerTextColor?: string;
  helpBaseUrl?: string;
  helpCenterUrl?: string;
  hideHelpChat?: boolean | string;
  hideUndock?: boolean | string;
  hideWidgetOnMobile?: boolean;
  knowledgebaseUrl?: string;
  locale?: string;
  productId?: string;
  searchService?: string;
  trainingCentralUrl?: string;
  useFlareSearch?: boolean;
  whatsNewRevisions?: any;
  hostQueryParams?: string;
}
