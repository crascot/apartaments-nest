import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
  UsePipes,
} from '@nestjs/common';
import { ApartamentsService } from './apartaments.service';
import { CreateApartamentDto } from './dto/create-apartament-dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Apartament } from 'src/models/apartament.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth-guard';
import { Roles } from 'src/auth/roles.auth.decorator';
import { RolesGuard } from 'src/auth/roles-guard';
import { ValidationPipe } from 'src/pipes/validation.pipe';

@ApiTags('apartaments')
@Controller('apartaments')
export class ApartamentsController {
  constructor(private apartamentService: ApartamentsService) {}

  @ApiResponse({ status: 200, type: [Apartament] })
  @Get()
  getAllApartaments() {
    return this.apartamentService.getAllApartaments();
  }

  @ApiResponse({ status: 200, type: Apartament })
  @Get(':apartamentId')
  getApartament(@Param('apartamentId') apartamentId: number) {
    return this.apartamentService.getOneApartament(apartamentId);
  }

  @ApiResponse({ status: 200, type: Apartament })
  @Post()
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  @UsePipes(ValidationPipe)
  createApartament(@Body() apartamentDto: CreateApartamentDto) {
    return this.apartamentService.createApartament(apartamentDto);
  }

  @ApiOperation({ summary: 'Update apartament' })
  @Put(':apartamentId')
  @UseGuards(JwtAuthGuard)
  updateApartament(
    @Param('apartamentId') apartamentId: number,
    @Body() apartamentDto: CreateApartamentDto,
  ) {
    return this.apartamentService.updateApartament(apartamentId, apartamentDto);
  }

  @ApiOperation({ summary: 'Delete apartament' })
  @Delete(':apartamentId')
  @UseGuards(JwtAuthGuard)
  @Roles('ADMIN')
  @UseGuards(RolesGuard)
  deleteApartament(@Param('apartamentId') apartamentId: number) {
    return this.apartamentService.deleteApartament(apartamentId);
  }
}
