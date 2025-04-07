import type { Schema, Struct } from '@strapi/strapi';

export interface ContentFormBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_form_blocks';
  info: {
    displayName: 'FormBlock';
    icon: 'code';
  };
  attributes: {
    enabled: Schema.Attribute.Boolean;
    form_type: Schema.Attribute.Enumeration<
      ['Ex:', 'Workshop registration,', 'Feedback']
    >;
  };
}

export interface ContentImageBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_image_blocks';
  info: {
    displayName: 'ImageBlock';
    icon: 'picture';
  };
  attributes: {
    caption: Schema.Attribute.Text;
    Image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
  };
}

export interface ContentTextBlock extends Struct.ComponentSchema {
  collectionName: 'components_content_text_blocks';
  info: {
    displayName: 'TextBlock';
    icon: 'apps';
  };
  attributes: {
    body: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'content.form-block': ContentFormBlock;
      'content.image-block': ContentImageBlock;
      'content.text-block': ContentTextBlock;
    }
  }
}
