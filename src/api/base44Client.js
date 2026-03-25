// Stub client - no Base44 dependencies
export const base44 = {
  entities: {},
  auth: {
    me: () => Promise.resolve(null),
    logout: () => {},
    redirectToLogin: () => {},
    isAuthenticated: () => Promise.resolve(false),
    updateMe: () => Promise.resolve(null),
  },
  integrations: {},
  functions: {
    invoke: () => Promise.resolve({ data: null }),
  },
  analytics: {
    track: () => {},
  },
  agents: {},
  users: {},
};