import streamlit as st
import pandas as pd



def pro(df,region_df):


    df = df[df['Season'] == 'Summer']
    df = df.merge(region_df,on='NOC',how='left')
    df.drop_duplicates()
    df = pd.concat([df,pd.get_dummies(df['Medal'])],axis = 1)
    return df