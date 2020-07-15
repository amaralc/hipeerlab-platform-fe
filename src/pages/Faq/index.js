/* --------------------------------- IMPORTS ---------------------------------*/
import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Header from '../../components/Header';
import Respirador from './Ventilator';
import Gerais from './General';
import 'react-tabs/style/react-tabs.css';
/* --------------------------------- EXPORTS ---------------------------------*/
export default function Faq() {
  return (
    <>
      {/* inclui o header nos moldes das paginas de conteudo */}
      <Header headerTitle="Perguntas Frequentes" />
      <div className="container">
        <Tabs>
          <TabList id="List">
            <Tab>Aspectos Gerais</Tab>
            <Tab>Respirador</Tab>
          </TabList>

          <TabPanel>
            <Gerais />
          </TabPanel>
          <TabPanel>
            <Respirador />
          </TabPanel>
        </Tabs>
      </div>
    </>
  );
}
