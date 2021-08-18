export interface HelpWidgetConfig {
  authEnabled?: boolean;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  caseCentralUrl?: string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  communityUrl?: string;
  customLocales?: string[];
  defaultHelpKey?: string;
  extends?: string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  getChatData?: any;
  getCurrentHelpKey?: any;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  headerColor?: string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  headerTextColor?: string;
  helpBaseUrl?: string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  helpCenterUrl?: string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  hideHelpChat?: boolean | string;
  /**
   * The undock component no longer exists, thus this configuration will have no effect.
   * @deprecated
   */
  hideUndock?: boolean | string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  hideWidgetOnMobile?: boolean;
  hostQueryParams?: string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  knowledgebaseUrl?: string;
  locale?: string;
  /**
   * Determines if widget will attempt to mimic being in the omnibar.
   * If true (default), the widget will create a green-ear trigger in the DOM that is designed to be on top of the omnibar.
   * If false, the widget will not create any visual elements in the DOM and will open all topics in a new tab.
   * It's recommended to disable omnibar mimicking.
   */
  mimicOmnibar?: boolean;
  productId?: string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  searchService?: string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  trainingCentralUrl?: string;
  /**
   * This does nothing when {@link HelpWidgetConfig#mimicOmnibar} is false.
   * Instead of using this property, disable omnibar mimicking.
   * @deprecated
   */
  useFlareSearch?: boolean;
  /**
   * This was a proposed solution to What's new years ago that never was acted upon.
   * @deprecated
   */
  whatsNewRevisions?: any;
  environmentId?: string;
}
