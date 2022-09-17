/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/jwt.guard';
import { createLead } from './dto/create-lead.dto';
import { LeadService } from './lead.service';
import { Lead } from './model/lead.entity';

@ApiTags('leads')
@Controller('leads')
export class LeadController {
    constructor(private readonly leadService: LeadService) {}

    @Post()
    createLead(@Body() create: createLead): Promise<Lead> {
        return this.leadService.create(create);
    }

    @UseGuards(JwtAuthGuard)
    @Get()
    findLeads(): Promise<Lead[]> {
        return this.leadService.findAll();
    }
 }
