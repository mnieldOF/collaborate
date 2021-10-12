import React from 'react';
import { Heading, DefaultInput, TextArea, TagList, Select } from '@openfrequency/component-library';

const CreateProject = () => {
    return ( 
        <>
            <Heading color='#5C7F92'>New Project</Heading>
            <DefaultInput label='Project Name' standard />
            <TextArea border='1px solid #5C7F92' standard/>
            <TagList label='Skills Required' />
            <TagList label='Keywords' />
            <DefaultInput label='Location' standard />
            <DefaultInput label='Location' standard />
            <DefaultInput type='number' label='Compensation value' standard />
            <Select />

        </>
     );
}
 
export default CreateProject;