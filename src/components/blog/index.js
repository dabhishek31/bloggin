import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Container, useTheme } from "@mui/material";
import { useParams } from "react-router-dom";
import CustomBox from "../common/box";
import CustomImage from "../common/image";
import SizedBox from "../common/sizedbox";
import CustomTypography from "../common/typography";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import useDocumentTitle from "../../hooks/useTitle";

const BlogView = () => {
  // let props = useParams();
  let theme = useTheme();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Read the blog here</title>
        <meta
          name="description"
          content="Enim exercitation velit sit laboris do cupidatat consequat dolore ea et incididunt velit.Nested component"
        />
      </Helmet>
      <SizedBox size={2} />
      <Container
        fixed
        sx={{
          display: { md: "flex" },
        }}
      >
        <CustomBox
          styles={{
            flex: "1",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CustomTypography>Technology | 20 min Read</CustomTypography>
          <SizedBox />
          <CustomTypography
            styles={{
              fontSize: theme.typography.h5,
            }}
          >
            Build your cloud infrastructure from code - Terraform (for
            beginners)
          </CustomTypography>
          <SizedBox size={0.5} />
          <CustomTypography>
            <HorizontalRuleIcon /> &nbsp; by Abhishek Das &nbsp;
            <CustomTypography styles={{ color: "#3083DC" }}>
              @abhishek_das
            </CustomTypography>
          </CustomTypography>
          <SizedBox />
        </CustomBox>
        <SizedBox />

        <CustomBox
          styles={{
            flex: "1.25",
          }}
        >
          <CustomImage
            src="https://images.pexels.com/photos/1066176/pexels-photo-1066176.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            styles={{
              width: "100%",
              objectFit: "cover",
            }}
          />
        </CustomBox>
      </Container>
      <Container fixed>
        <SizedBox />
        <CustomTypography
          styles={{
            fontSize: theme.typography.body1,
          }}
        >
          Ad nisi eu mollit eiusmod est sit mollit labore non aute et culpa
          ullamco. Aute eu eiusmod nulla aliqua officia nostrud labore culpa.
          Esse mollit id anim aliqua occaecat commodo nostrud commodo ex
          consequat enim. Amet eiusmod magna dolor minim amet nulla cillum anim
          proident laborum dolor magna aliqua. Sunt aute labore ut culpa et
          minim sint sunt. Eiusmod labore eiusmod magna consequat.
          <SizedBox size={0.5} />
          Occaecat consequat magna proident voluptate aliquip commodo nostrud
          nulla ex excepteur labore consectetur. Quis aliquip incididunt cillum
          do ut. Ipsum consequat dolore cillum incididunt in occaecat dolore. Ea
          esse minim amet voluptate deserunt sint amet ad labore laboris
          deserunt. Officia adipisicing voluptate in adipisicing exercitation
          elit ipsum. Enim minim id deserunt sint culpa ut esse in officia.
          Officia et minim reprehenderit exercitation Lorem.
          <SizedBox size={0.5} />
          Commodo adipisicing et cillum anim elit nisi fugiat eu labore. Aute
          voluptate ex consectetur eu ex. Cupidatat sunt culpa occaecat sit
          veniam et sunt adipisicing deserunt cillum. Qui sunt labore et
          pariatur in excepteur enim. Dolore magna Lorem id enim laborum
          incididunt nulla. Id magna veniam non dolor qui dolore sit id tempor
          occaecat laborum.
        </CustomTypography>
        <SizedBox size={1.5} />
        <CustomTypography
          styles={{
            fontStyle: "italic",
            fontSize: theme.typography.body1,
          }}
        >
          Editor's note: This post was originally published in December 2016 and
          has been updated for comprehensiveness.
        </CustomTypography>
        <SizedBox size={0.5} />
        <CustomTypography
          styles={{
            fontStyle: "italic",
          }}
        >
          Originally published Apr 7, 2022 7:00:00 AM, updated April 07 2022
        </CustomTypography>
        <SizedBox size={2} />
      </Container>
    </>
  );
};

export default BlogView;
