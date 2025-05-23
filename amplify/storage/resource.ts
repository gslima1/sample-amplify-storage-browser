import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'myStorageBucket',
  isDefault: true,
   access: (allow) => ({
    'public/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ],
    /*'admin/*': [
        allow.groups(['admin']).to(['read', 'write', 'delete']),
        allow.authenticated.to(['read'])
    ],*/
    'private/{entity_id}/*': [
        allow.entity('identity').to(['read', 'write', 'delete'])
    ],
    'customer1/{entity_id}/*': [
        allow.groups(['customer1']).to(['read', 'write', 'delete']),        
        allow.entity('identity').to(['read', 'write', 'delete'])
    ],  
    'customer2/*': [
        allow.groups(['customer2']).to(['read', 'write'])
    ]        
   })
});

/*export const secondaryStorage = defineStorage({
  name: 'mySecondaryStorageBucket',
   access: (allow) => ({
    'backup_public/*': [
        allow.guest.to(['read', 'write']),
        allow.authenticated.to(['read', 'write', 'delete']),
    ],
    'backup_admin/*': [
        allow.groups(['admin']).to(['read', 'write', 'delete']),
        allow.authenticated.to(['read'])
    ],
    'backup_private/{entity_id}/*': [
        allow.entity('identity').to(['read', 'write', 'delete'])
    ]
   })
});*/



