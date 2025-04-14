import type { Schema, Struct } from '@strapi/strapi';

export interface SharedIconItem extends Struct.ComponentSchema {
  collectionName: 'components_shared_icon_items';
  info: {
    displayName: 'icon-item';
  };
  attributes: {
    icon: Schema.Attribute.Media<'images'>;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface Table3Columns extends Struct.ComponentSchema {
  collectionName: 'components_table_3_columns';
  info: {
    description: '';
    displayName: '3-columns';
  };
  attributes: {
    subtitle1: Schema.Attribute.String;
    subtitle3: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'shared.icon-item': SharedIconItem;
      'table.3-columns': Table3Columns;
    }
  }
}
