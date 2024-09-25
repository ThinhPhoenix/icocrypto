'use client'
import PageHeader from "@/components/blocks/page-header";
import Ikon from "@/components/elements/element-ikon";
import Modals from "@/components/elements/element-modals";
import PictureModals from "@/components/elements/element-picture-modals";
import PlayVideos from "@/components/elements/element-play-videos";
import VideoModals from "@/components/elements/element-video-modals";
import Videos from "@/components/elements/element-videos";
import Image from "next/image";
import { useState } from "react";
import styles from "@/app/page.module.css"
import SignIn from "@/components/blocks/login";
import { StyledSize } from "@/utils/sizeclass";
import CustomButton from "@/components/elements/element-button";

export default function Home() {
  return (
    <div style={{
      paddingTop: '50px',
    }}>
        <PageHeader
        size={StyledSize.Xl}
        title="WORLD FIRST DECENTRALIZED MARKETPLACE WITH BLOCKCHAIN INFRASTRUCTURE"
        >
          <div>
          The first decentralized Marketplace which makes simplifies and standarizes data with blockchain technology. We provides user-friendly, efficient and secure crypto solutions and utilizing blockchain technology.
          </div>
          <div style={{
            display: "flex",
            gap: "20px",
            justifyContent: 'center',
            marginTop: '20px'
          }}>
            <CustomButton text="Token sale" variant="primary"/>
            <CustomButton text="Private sale" outline/>
          </div>
        </PageHeader>
    </div>
  );
}