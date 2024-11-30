export interface ListNode {
  label?: string;         // The label of the node
  data?: any;             // Any additional data the node holds
  children?: ListNode[];  // Nested children nodes
  expanded?: boolean;     // Whether the node is expanded
  leaf?: boolean;         // Indicates if the node is a leaf node
  selectable?: boolean;   // Indicates if the node is selectable
  selected?: boolean;     // Indicates if the node is selected
  icon?: string;          // Icon for the node
  expandedIcon?: string;  // Icon when the node is expanded
  collapsedIcon?: string; // Icon when the node is collapsed
}
