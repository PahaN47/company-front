export type WsChatRequestMessage =
    | {
          chat: number;
          message: string;
          type: 'send';
          user: number;
      }
    | {
          id: number;
          type: 'delete';
      };

export type WsChatResponseMessage =
    | {
          chat: number;
          date: string;
          id: number;
          message: string;
          type: 'send';
          user: number;
      }
    | {
          id: number;
          type: 'delete';
      };

export type WsChatMessageType = 'send' | 'delete';
