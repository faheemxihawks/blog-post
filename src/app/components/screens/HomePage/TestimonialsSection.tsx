"use client"
import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Box, Container, Grid, Typography, Avatar, IconButton, Stack } from "@mui/material";

const TestimonialsSection: React.FC = () => {
    return (
        <Box sx={{ bgcolor: 'grey.900', py: 5 }}>
            <Container maxWidth="lg" sx={{ px: { xs: 2, md: 5 }, p: 4 }}>
                <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
                    {/* Left Column */}
                    <Grid item xs={12} md={6}>
                        <Typography
                            variant="overline" 
                            sx={{
                                color: 'grey.400',
                                mb: 4,
                                letterSpacing: '0.2em',
                                display: 'block'
                            }}
                        >
                            Testimonials
                        </Typography>
                        <Typography variant="h4" component="h2" fontWeight="extrabold" sx={{ color: 'white', mb: 6 }}>
                            What people say <br /> about our blog
                        </Typography>
                        <Typography variant="body1" sx={{ color: 'grey.300' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </Typography>
                    </Grid>

                    {/* Right Column */}
                    <Grid item xs={12} md={6}>
                        <Stack
                            direction={{ xs: 'column', lg: 'row' }}
                            alignItems={{ xs: 'flex-start', lg: 'flex-end' }}
                            spacing={4}
                            sx={{
                                borderLeft: { lg: 1 },
                                borderColor: { lg: 'grey.600' },
                                pl: { lg: 4 }
                            }}
                        >
                            <Box>
                                <Typography variant="h6" component="h3" fontWeight="medium" sx={{ mb: 4, color: 'grey.100' }}>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                </Typography>

                                {/* Author Info */}
                                <Stack direction="row" spacing={2} alignItems="center">
                                    <Avatar
                                        src="/images/Profile-picture.png" // replace with your testimonial image
                                        alt="Jonathan Vallem"
                                        sx={{ width: 48, height: 48 }}
                                    />
                                    <Box>
                                        <Typography variant="subtitle1" fontWeight="semibold" sx={{ color: 'white' }}>
                                            Jonathan Vallem
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'grey.400' }}>
                                            New York, USA
                                        </Typography>
                                    </Box>
                                </Stack>
                            </Box>

                            {/* Arrows */}
                            <Stack direction="row" spacing={2} sx={{ pt: { xs: 4, lg: 0 }, alignSelf: { xs: 'flex-start', lg: 'flex-end' } }}>
                                <IconButton sx={{ bgcolor: 'white', color: 'black', '&:hover': { bgcolor: 'grey.200' } }}>
                                    <ArrowLeft className="w-5 h-5" />
                                </IconButton>
                                <IconButton sx={{ bgcolor: '#FF595A', color: 'white', '&:hover': { bgcolor: '#ff7778' } }}>
                                    <ArrowRight className="w-5 h-5" />
                                </IconButton>
                            </Stack>
                        </Stack>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default TestimonialsSection;
