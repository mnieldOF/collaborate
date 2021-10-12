import React, { useState } from 'react';
import { Flex, Box } from '@openfrequency/component-library';

const data = [
    {id : '1',
     tabTitle: "Tab 1",
     tabContent: 'Tab Content 1'
    },
    {id : '2',
     tabTitle: "Tab 2",
     tabContent: 'Tab Content 2'
    },
    {id : '3',
     tabTitle: "Tab 3",
     tabContent: 'Tab Content 3'
    }
  ]

const Tabs = () => {

    const [visibleTab, setVisibleTab] = useState(data[0].id);

    const listTitles = data.map((item) => 
        <Box onClick={() => setVisibleTab(item.id)} className={visibleTab === item.id ? "tab-title tab-title--active" : "tab-title"}>{item.tabTitle}</Box>
    )

    const listContent = data.map((item) => 
        <p style={visibleTab === item.id ? {} : {display: 'none'}}>{item.tabContent}</p>
    )

    return(
        <Box>
            <Flex className="tabs-titles">
                {listTitles}
            </Flex>
            <div className="tab-content">
                {listContent}
            </div>
        </Box>
    )
}

export default Tabs;