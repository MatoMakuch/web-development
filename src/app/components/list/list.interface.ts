export interface ListNode {
  id?: number;            // Unique identifier
  data?: any;             // Any additional data the node holds
  children?: ListNode[];  // Nested children nodes
  expanded?: boolean;     // Whether the node is expanded
  selected?: boolean;     // Indicates if the node is selected
}
