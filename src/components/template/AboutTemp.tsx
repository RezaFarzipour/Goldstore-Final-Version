import { Grid2, Typography } from "@mui/material";
import Layout from "../containers/layout/Layout";

const AboutUsPage = () => {
  return (
    <Layout>
      <Grid2
        container
        sx={{ p: { xs: 1, md: 8 }, justifyContent: "center", display: "flex" }}
      >
        <Typography
          sx={{
            fontSize: { xs: "25px", md: "35px" },
            mt: 5,
            color: "#FFC436",
            fontWeight: "bold",
            fontFamily: "Lalazar",
          }}
        >
          درباره طلای تهران
        </Typography>

        <Grid2
          sx={{
            border: "1px solid #2B2926",
            borderRadius: "20px",
            backgroundColor: "#2B2926",
          }}
          container
          display="flex"
          justifyContent="space-around"
          alignItems="center"
          my={10}
          size={{ xs: 12 }}
        >
          <Grid2 size={{ xs: 12 }}>
            <Typography
              fontSize="20px"
              variant="h6"
              color="#e3e5e5"
              fontWeight="500"
              fontFamily="Yekan"
              textAlign="justify"
              sx={{
                p: 5,
                height: "100%",
                lineHeight: { xs: "33px", sm: "35px", md: "40px" },
                fontSize: { xs: "14px", sm: "16px", md: "20px" },
              }}
            >
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
            </Typography>
          </Grid2>
        </Grid2>
      </Grid2>
    </Layout>
  );
};

export default AboutUsPage;
